package com.trois.talenthubbackend.talentHub.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.trois.talenthubbackend.talentHub.dto.UserDTO;

public class UserDTOMapper implements RowMapper<UserDTO> {
	@Autowired
	public UserDTOMapper(JdbcTemplate template) {
		jdbcTemplate = template;
	}

	private JdbcTemplate jdbcTemplate;
	private final String FIND_ROLE = "SELECT role_id as id,role_name as name FROM role WHERE rr_user_id=?";
	private final String FIND_ORG = "SELECT organization_id as id, organization_name as name FROM organization WHERE org_user_id=?";

	@Override
	public UserDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		UserDTO dto = new UserDTO();
		dto.setId(rs.getInt("id"));
		dto.setUserName(rs.getString("user_name"));
		dto.setRoles(jdbcTemplate.query(FIND_ROLE, new Object[] { dto.getId() }, new RoleDTOMapper(jdbcTemplate)));
		dto.setOrganizations(jdbcTemplate.query(FIND_ORG, new Object[] { dto.getId() }, new OrganizationDTOMapper()));

		return dto;
	}

}
