package com.trois.talenthubbackend.talentHub.controller;

import java.util.List;

import org.apache.http.client.HttpResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sybit.airtable.exception.AirtableException;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;
import com.trois.talenthubbackend.talentHub.service.AirtableFetchService;

@Controller
@RequestMapping("/airtable")
public class AirTableFetchController {

	@Autowired
	private AirtableFetchService airtableFetchService;

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

}
