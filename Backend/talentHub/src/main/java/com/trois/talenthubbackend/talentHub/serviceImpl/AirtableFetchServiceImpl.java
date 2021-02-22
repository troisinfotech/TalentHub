package com.trois.talenthubbackend.talentHub.serviceImpl;

import java.util.List;

import org.apache.http.client.HttpResponseException;
import org.springframework.stereotype.Service;

import com.sybit.airtable.Airtable;
import com.sybit.airtable.Base;
import com.sybit.airtable.Sort;
import com.sybit.airtable.Table;
import com.sybit.airtable.exception.AirtableException;
import com.trois.talenthubbackend.talentHub.model.Organization;
import com.trois.talenthubbackend.talentHub.model.Permission;
import com.trois.talenthubbackend.talentHub.model.Role;
import com.trois.talenthubbackend.talentHub.model.User;
import com.trois.talenthubbackend.talentHub.service.AirtableFetchService;

@Service
public class AirtableFetchServiceImpl implements AirtableFetchService {
	private Airtable airtable;
	private Base base;

	public AirtableFetchServiceImpl() throws AirtableException {
		airtable = new Airtable().configure();
		base = airtable.base("appAmGo6C2Oj3S22k");
	}

	public List<User> findAllUsers() throws HttpResponseException, AirtableException {
		Table<User> userTable = base.table("user", User.class);
		return userTable.select(new Sort("userid"));
	}

	public List<Role> findAllRoles() throws HttpResponseException, AirtableException {
		Table<Role> roleTable = base.table("role", Role.class);
		return roleTable.select(new Sort("roleid"));
	}

	public List<Permission> findAllPermissions() throws HttpResponseException, AirtableException {
		Table<Permission> permissionTable = base.table("permission", Permission.class);
		return permissionTable.select(new Sort("permissionid"));
	}

	public List<Organization> findAllOrganizations() throws HttpResponseException, AirtableException {
		Table<Organization> organizationTable = base.table("organization", Organization.class);
		return organizationTable.select(new Sort("organizationid"));
	}

}
