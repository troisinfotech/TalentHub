package com.trois.talenthubbackend.talentHub.service;

import java.util.List;

import org.apache.http.client.HttpResponseException;
import org.springframework.stereotype.Service;

import com.sybit.airtable.Airtable;
import com.sybit.airtable.Base;
import com.sybit.airtable.Sort;
import com.sybit.airtable.Table;
import com.sybit.airtable.exception.AirtableException;
import com.trois.talenthubbackend.talentHub.dto.OrganizationDTO;
import com.trois.talenthubbackend.talentHub.dto.PermissionDTO;
import com.trois.talenthubbackend.talentHub.dto.RoleDTO;
import com.trois.talenthubbackend.talentHub.dto.UserDTO;

@Service
public class AirtableFetchService {
	private Airtable airtable;
	private Base base;

	public AirtableFetchService() throws AirtableException {
		airtable = new Airtable().configure();
		base = airtable.base("appAmGo6C2Oj3S22k");
	}

	public List<UserDTO> findAllUsers() throws HttpResponseException, AirtableException {
		Table<UserDTO> userTable = base.table("user", UserDTO.class);
		return userTable.select(new Sort("userid"));
	}

	public List<RoleDTO> findAllRoles() throws HttpResponseException, AirtableException {
		Table<RoleDTO> roleTable = base.table("role", RoleDTO.class);
		return roleTable.select(new Sort("roleid"));
	}

	public List<PermissionDTO> findAllPermissions() throws HttpResponseException, AirtableException {
		Table<PermissionDTO> permissionTable = base.table("permission", PermissionDTO.class);
		return permissionTable.select(new Sort("permissionid"));
	}

	public List<OrganizationDTO> findAllOrganizations() throws HttpResponseException, AirtableException {
		Table<OrganizationDTO> organizationTable = base.table("organization", OrganizationDTO.class);
		return organizationTable.select(new Sort("organizationid"));
	}

}
