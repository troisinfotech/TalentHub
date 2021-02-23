package com.trois.talenthubbackend.talentHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trois.talenthubbackend.talentHub.model.Role;

@Repository
public interface RoleLocalDBRepository extends JpaRepository<Role,Integer> {

}