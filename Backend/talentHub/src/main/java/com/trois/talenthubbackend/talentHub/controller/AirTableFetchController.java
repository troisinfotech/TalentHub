package com.trois.talenthubbackend.talentHub.controller;

import java.util.List;

import org.apache.http.client.HttpResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sybit.airtable.exception.AirtableException;
import com.trois.talenthubbackend.talentHub.dto.OrganizationDTO;
import com.trois.talenthubbackend.talentHub.dto.PermissionDTO;
import com.trois.talenthubbackend.talentHub.dto.RoleDTO;
import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.service.AirtableFetchService;

@Controller
public class AirTableFetchController {

	@Autowired
	private AirtableFetchService airtableFetchService;

	@GetMapping("/users")
	@ResponseBody
	public List<UserDTO> findAllUsers() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllUsers();
	}

	@GetMapping("/roles")
	@ResponseBody
	public List<RoleDTO> findAllRoles() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllRoles();
	}

	@GetMapping("/permissions")
	@ResponseBody
	public List<PermissionDTO> findAllPermissions() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllPermissions();
	}

	@GetMapping("/organizations")
	@ResponseBody
	public List<OrganizationDTO> findAllOrganizations() throws HttpResponseException, AirtableException {
		return airtableFetchService.findAllOrganizations();
	}

}
