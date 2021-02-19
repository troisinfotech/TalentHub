package com.trois.talenthubbackend.talentHub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;
import com.trois.talenthubbackend.talentHub.repository.OrganizationDBRepository;
import com.trois.talenthubbackend.talentHub.repository.PermissionDBRepository;
import com.trois.talenthubbackend.talentHub.repository.RoleLocalDBRepository;
import com.trois.talenthubbackend.talentHub.repository.UserLocalDBRepository;
import com.trois.talenthubbackend.talentHub.repository.UserRepository;

@Service
public class LocalDBService {
	@Autowired
	private UserLocalDBRepository dbRepository;
	@Autowired
	private RoleLocalDBRepository localDBRepository;
	@Autowired
	private PermissionDBRepository permissionDBRepository;
	@Autowired
	private OrganizationDBRepository organizationDBRepository;
	@Autowired
	private UserRepository repository;

	public List<User> saveAllUsers(List<User> users) {
		return dbRepository.saveAll(users);

	}

	public List<Role> saveAllRoles(List<Role> roles) {
		return localDBRepository.saveAll(roles);

	}

	public List<Permission> saveAllPermissions(List<Permission> permissions) {

		return permissionDBRepository.saveAll(permissions);
	}

	public List<Organization> saveAllOrganizations(List<Organization> organizations) {
		return organizationDBRepository.saveAll(organizations);
	}

	public UserDTO getUserbyId(int id) {
		return repository.findUserById(id);

	}
}
