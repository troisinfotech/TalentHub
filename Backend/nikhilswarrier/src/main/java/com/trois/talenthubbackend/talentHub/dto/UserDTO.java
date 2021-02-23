package com.trois.talenthubbackend.talentHub.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserDTO {
	@JsonProperty("id")
	private int id;
	@JsonProperty("name")
	private String userName;
	@JsonProperty("roles")
	private List<RoleDTO> roles;
	@JsonProperty("organizations")
	private List<OrganizationDTO> organizations;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<RoleDTO> getRoles() {
		return roles;
	}

	public void setRoles(List<RoleDTO> roles) {
		this.roles = roles;
	}

	public List<OrganizationDTO> getOrganizations() {
		return organizations;
	}

	public void setOrganizations(List<OrganizationDTO> organizations) {
		this.organizations = organizations;
	}
}
