package com.trois.talenthubbackend.talentHub.repository;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.mapper.UserDTOMapper;

@Component
public class UserRepository {
	JdbcTemplate jdbcTemplate;
	private final String FIND_USERS = "SELECT * FROM user WHERE id=?";

	// private final String JOIN_QUERY = "select
	// user.id,user.user_name,role_id,role_name,permission_id ,permission_name
	// ,organization.organization_id ,organization.organization_name from user inner
	// join (select role.role_id,role.role_name,
	// role.user_id,permission.permission_id,permission.permission_name from role
	// inner join permission on permission.role_id=role.role_id) on
	// user.id=organization.user_id and user.id=user_id inner join organization";
	@Autowired
	public UserRepository(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public UserDTO findUserById(int id) {

		return jdbcTemplate.queryForObject(FIND_USERS, new Object[] { id }, new UserDTOMapper(jdbcTemplate));

	}
}
