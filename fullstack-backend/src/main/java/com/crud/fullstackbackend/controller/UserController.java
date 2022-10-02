package com.crud.fullstackbackend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.fullstackbackend.exception.UserNotFoundException;
import com.crud.fullstackbackend.model.Users;
import com.crud.fullstackbackend.repository.UserRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000"
//methods = {RequestMethod.POST,RequestMethod.GET},
//allowedHeaders = "*"
)
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@PostMapping("/user")
	Users newUser(@RequestBody Users newUser) {
		return userRepository.save(newUser);
	}
	@GetMapping("/allUsers")
	List<Users> getAllUser(){ 
		return userRepository.findAll();
	}
	@GetMapping("/user/{id}")
	Users getUserById(@PathVariable Long id) {
		return userRepository.findById(id)   
				.orElseThrow(()->new UserNotFoundException(id));
	}
	@PutMapping("/user/{id}")
	Users updateUser(@RequestBody Users newUser, @PathVariable Long id) {
		return userRepository.findById(id).
				map(user->{
					user.setName(newUser.getName());
					user.setUsername(newUser.getUsername());
					user.setEmail(newUser.getEmail());
					user.setAge(newUser.getAge());
					user.setPassword(newUser.getPassword());
					user.setAddress(newUser.getAddress());
					user.setCity(newUser.getCity());
					user.setEnabled(newUser.getEnabled());
					user.setPhoneNumber(newUser.getPhoneNumber());
					return userRepository.save(user);
				}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userRepository.deleteById(id);
		return "User with id "+ id +" has been deleted Successfully.";
	}
}
