package com.trois.talenthubbackend.talentHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trois.talenthubbackend.talentHub.model.User;

@Repository
public interface UserLocalDBRepository extends JpaRepository<User, Integer> {

}
