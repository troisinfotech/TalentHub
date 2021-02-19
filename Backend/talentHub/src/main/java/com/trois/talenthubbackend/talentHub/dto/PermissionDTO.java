package com.trois.talenthubbackend.talentHub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PermissionDTO {
	@JsonProperty("id")
	private int permissionId;

	@JsonProperty("name")
	private String permissionName;

	public int getPermissionId() {
		return permissionId;
	}

	public void setPermissionId(int permissionId) {
		this.permissionId = permissionId;
	}

	public String getPermissionName() {
		return permissionName;
	}

	public void setPermissionName(String permissionName) {
		this.permissionName = permissionName;
	}

}
