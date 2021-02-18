package com.trois.talenthubbackend.talentHub.controller;

import java.util.List;

import org.apache.http.client.HttpResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sybit.airtable.exception.AirtableException;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;
import com.trois.talenthubbackend.talentHub.service.AirtableFetchService;
import com.trois.talenthubbackend.talentHub.service.LocalDBService;

@Controller
public class AirTableFetchController {

	@Autowired
	private AirtableFetchService airtableFetchService;
	@Autowired
	private LocalDBService localDBService;

	@GetMapping("/users")
	@ResponseBody
	public List<User> findAllUsers() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllUsers();
	}

	@GetMapping("/roles")
	@ResponseBody
	public List<Role> findAllRoles() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllRoles();
	}

	@GetMapping("/permissions")
	@ResponseBody
	public List<Permission> findAllPermissions() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllPermissions();
	}

	@GetMapping("/organizations")
	@ResponseBody
	public List<Organization> findAllOrganizations() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllOrganizations();
	}

	@PostMapping("/save/users")
	@ResponseBody
	public List<User> saveAllUsers(@RequestBody List<User> users) throws HttpResponseException, AirtableException {
		return localDBService.saveAllUsers(users);

	}

	@PostMapping("/save/roles")
	@ResponseBody
	public List<Role> saveAllRoles(@RequestBody List<Role> roles) throws HttpResponseException, AirtableException {
		return localDBService.saveAllRoles(roles);

	}

	@PostMapping("/save/permissions")
	@ResponseBody
	public List<Permission> saveAllPermissions(@RequestBody List<Permission> permissions)
			throws HttpResponseException, AirtableException {
		return localDBService.saveAllPermissions(permissions);

	}

	@PostMapping("/save/organizations")
	@ResponseBody
	public List<Organization> saveAllOrganizations(@RequestBody List<Organization> organizations)
			throws HttpResponseException, AirtableException {
		return localDBService.saveAllOrganizations(organizations);

	}
}
