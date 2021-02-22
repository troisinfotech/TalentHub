package com.trois.talenthubbackend.talentHub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;
@Service
public interface LocalDBService {
	public List<User> saveAllUsers(List<User> users);
	public List<Role> saveAllRoles(List<Role> roles);
	public List<Permission> saveAllPermissions(List<Permission> permissions);
	public List<Organization> saveAllOrganizations(List<Organization> organizations);
	public UserDTO getUserbyId(int id);
	
}
