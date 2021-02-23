package com.trois.talenthubbackend.talentHub.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.google.gson.annotations.SerializedName;
@Entity
public class Organization {
	@Id
	@SerializedName("organizationid")
	private int organizationId;
	@SerializedName("organizationname")
	private String organizationName;
	@SerializedName("userid")
	private int orgUserId;

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
		return orgUserId;
	}

	public void setUserId(int userId) {
		this.orgUserId = userId;
	}

}
