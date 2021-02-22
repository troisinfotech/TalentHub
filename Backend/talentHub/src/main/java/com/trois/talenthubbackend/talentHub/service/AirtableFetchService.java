package com.trois.talenthubbackend.talentHub.service;

import java.util.List;

import org.apache.http.client.HttpResponseException;
import org.springframework.stereotype.Service;

import com.sybit.airtable.exception.AirtableException;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;

@Service
public interface AirtableFetchService {
	public List<User> findAllUsers() throws HttpResponseException, AirtableException;

	public List<Role> findAllRoles() throws HttpResponseException, AirtableException;

	public List<Permission> findAllPermissions() throws HttpResponseException, AirtableException;

	public List<Organization> findAllOrganizations() throws HttpResponseException, AirtableException;
}
