package com.crud.fullstackbackend.repository;

import com.crud.fullstackbackend.model.Users;


import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<Users, Long>{

	public<Map> Users findByUsername(String username);

//	@Query(value = "SELECT * FROM USER WHERE username = ?1 and password=?2", nativeQuery = true)
//	  User validateUser(String username,String password);
}
