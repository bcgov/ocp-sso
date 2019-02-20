/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.github.bcgov.keycloak.authenticators;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.UriBuilder;

import org.jboss.logging.Logger;
import org.keycloak.authentication.AuthenticationFlowContext;
import org.keycloak.authentication.AuthenticationFlowError;
import org.keycloak.authentication.AuthenticationFlowException;
import org.keycloak.authentication.authenticators.broker.AbstractIdpAuthenticator;
import org.keycloak.authentication.authenticators.broker.util.SerializedBrokeredIdentityContext;
import org.keycloak.broker.provider.BrokeredIdentityContext;
import org.keycloak.models.AuthenticatorConfigModel;
import org.keycloak.models.ClientModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.keycloak.services.messages.Messages;
import org.keycloak.sessions.AuthenticationSessionModel;

/**
 * @author <a href="mailto:bill@burkecentral.com">Bill Burke</a>
 * @version $Revision: 1 $
 */
public class RequireRoleByClient implements org.keycloak.authentication.Authenticator {
    private static Logger logger = Logger.getLogger(RequireRoleByClient.class);
    
    
    @Override
    public void authenticate(AuthenticationFlowContext context) {
    	AuthenticatorConfigModel config = context.getAuthenticatorConfig();
    	String client = config.getConfig().get(RequireRoleByClientFactory.CLIENT_NAME);
    	String role = config.getConfig().get(RequireRoleByClientFactory.ROLE_NAME);
    	String errorUrl = config.getConfig().get(RequireRoleByClientFactory.ERROR_URL);
    	
        AuthenticationSessionModel authSession = context.getAuthenticationSession();

        SerializedBrokeredIdentityContext serializedCtx = SerializedBrokeredIdentityContext.readFromAuthenticationSession(authSession, AbstractIdpAuthenticator.BROKERED_CONTEXT_NOTE);
        if (serializedCtx == null) {
            throw new AuthenticationFlowException("Not found serialized context in clientSession", AuthenticationFlowError.IDENTITY_PROVIDER_ERROR);
        }
        BrokeredIdentityContext brokerContext = serializedCtx.deserialize(context.getSession(), authSession);
        
        //brokerContext.getIdpConfig().getAlias()
        
    	ClientModel sessionClient = context.getAuthenticationSession().getClient();
    	boolean authShouldFail = false;
    	
    	if (hasAuthenticatorConfig(context) && client!=null && role!=null && client.length()>0 && role.length()>0){
    		logger.infof("Validating if user has role '%s' when coming from client '%s'", role, client);
    		logger.infof("Expected client '%s', found client '%s'", client, sessionClient.getClientId());
    		if ((client.equalsIgnoreCase(sessionClient.getClientId()))) {
    			if (!context.getUser().hasRole(context.getRealm().getRole(role))) {
    				authShouldFail=true;
    			}
    		}
    	}else {
	        Response challengeResponse = context.form()
	                .setError(Messages.INTERNAL_SERVER_ERROR)
	                .createErrorPage(Response.Status.INTERNAL_SERVER_ERROR);
	        context.challenge(challengeResponse);
	        return;
    	}
    	
    	if (authShouldFail) {
    		logger.infof("User does not have required role '%s'", role, client);
    		UriBuilder uriBuilder = null;
    		if (errorUrl !=null && errorUrl.length()>0) {
    			uriBuilder = UriBuilder.fromUri(sessionClient.getBaseUrl());
    			uriBuilder.queryParam("error", "Access Denied (Missing Required Role)");
    		}else {
    			errorUrl=errorUrl.replace("${idp_alias}", brokerContext.getIdpConfig().getAlias());
    			errorUrl=errorUrl.replace("${client_id}", sessionClient.getClientId());
    			uriBuilder = UriBuilder.fromUri(errorUrl);
    		}
	        
	        ResponseBuilder responseBuilder = Response.temporaryRedirect(uriBuilder.build());
	        context.failure(AuthenticationFlowError.INVALID_USER, responseBuilder.build());
	        return;
    	}
    	
    	context.success();
    }
    

    
    
    private boolean hasAuthenticatorConfig(AuthenticationFlowContext context) {
        return context != null
                && context.getAuthenticatorConfig() != null
                && context.getAuthenticatorConfig().getConfig() != null
                && !context.getAuthenticatorConfig().getConfig().isEmpty();
    }




	@Override
	public void close() {
		//no-op
	}




	@Override
	public void action(AuthenticationFlowContext context) {
		authenticate(context);
	}




	@Override
	public boolean requiresUser() {
		return false;
	}




	@Override
	public boolean configuredFor(KeycloakSession session, RealmModel realm, UserModel user) {
		return true;
	}




	@Override
	public void setRequiredActions(KeycloakSession session, RealmModel realm, UserModel user) {
		//no-op
	}


}
