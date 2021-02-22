package com.trois.talenthubbackend.talentHub.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.errors.BadRequestException;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;
import com.trois.talenthubbackend.talentHub.repository.OrganizationDBRepository;
import com.trois.talenthubbackend.talentHub.repository.PermissionDBRepository;
import com.trois.talenthubbackend.talentHub.repository.RoleLocalDBRepository;
import com.trois.talenthubbackend.talentHub.repository.UserLocalDBRepository;
import com.trois.talenthubbackend.talentHub.repository.UserRepository;
import com.trois.talenthubbackend.talentHub.service.LocalDBService;

@Service
public class LocalDBServiceImpl implements LocalDBService{
	public static final String NO_ENTITY_FOUND = "no entity existing";
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
		Optional<UserDTO> hasUser = Optional.of(repository.findUserById(id));
		if (!hasUser.isPresent())
			throw new BadRequestException(NO_ENTITY_FOUND);
		UserDTO user = hasUser.get();
		return user;

	}
}
