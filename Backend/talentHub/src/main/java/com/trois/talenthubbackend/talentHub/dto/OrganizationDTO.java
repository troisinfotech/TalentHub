package com.trois.talenthubbackend.talentHub.dto;

import com.google.gson.annotations.SerializedName;

public class OrganizationDTO {
	@SerializedName("organizationid")
	private int organizationId;
	@SerializedName("organizationname")
	private String organizationName;
	@SerializedName("userid")
	private int userId;

	public int getOrganizationId() {
		return organizationId;
	}

	public void setOrganizationId(int organizationId) {
		this.organizationId = organizationId;
	}

	public String getOrganizationName() {
		return organizationName;
	}

	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

}
