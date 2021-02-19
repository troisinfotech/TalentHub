package com.trois.talenthubbackend.talentHub.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.trois.talenthubbackend.talentHub.dto.RoleDTO;

public class RoleDTOMapper implements RowMapper<RoleDTO> {

	private JdbcTemplate jdbcTemplate;
	private final String FIND_PERMISSION = "SELECT permission_id as id,permission_name as name FROM permission WHERE role_id=?";

	@Autowired
	public RoleDTOMapper(JdbcTemplate template) {
		jdbcTemplate = template;
	}

	@Override
	public RoleDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		RoleDTO dto = new RoleDTO();
		dto.setRoleId(rs.getInt("id"));
		dto.setRoleName(rs.getString("name"));
		dto.setPermissions(
				jdbcTemplate.query(FIND_PERMISSION, new Object[] { dto.getRoleId() }, new PermissionDTOMapper()));
		return dto;
	}

}
