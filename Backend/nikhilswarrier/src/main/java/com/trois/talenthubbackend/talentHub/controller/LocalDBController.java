package com.trois.talenthubbackend.talentHub.controller;

import java.util.List;

import org.apache.http.client.HttpResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sybit.airtable.exception.AirtableException;
import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;
import com.trois.talenthubbackend.talentHub.service.LocalDBService;

@RestController
@RequestMapping("/localdb")
public class LocalDBController {
	@Autowired
	private LocalDBService localDbService;

	@PostMapping("/save/users")
	@ResponseBody
	public List<User> saveAllUsers(@RequestBody List<User> users) throws HttpResponseException, AirtableException {
		return localDbService.saveAllUsers(users);

	}

	@PostMapping("/save/roles")
	@ResponseBody
	public List<Role> saveAllRoles(@RequestBody List<Role> roles) throws HttpResponseException, AirtableException {
		return localDbService.saveAllRoles(roles);

	}

	@PostMapping("/save/permissions")
	@ResponseBody
	public List<Permission> saveAllPermissions(@RequestBody List<Permission> permissions)
			throws HttpResponseException, AirtableException {
		return localDbService.saveAllPermissions(permissions);

	}

	@PostMapping("/save/organizations")
	@ResponseBody
	public List<Organization> saveAllOrganizations(@RequestBody List<Organization> organizations)
			throws HttpResponseException, AirtableException {
		return localDbService.saveAllOrganizations(organizations);

	}

	@GetMapping("/user/{id}")
	@ResponseBody
	public UserDTO getUserById(@PathVariable int id) {
		return localDbService.getUserbyId(id);
	}

}
