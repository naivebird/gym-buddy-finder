package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.model.UserAccount;
import com.gbf.gym_buddy_finder.service.UserAccountService;
import org.apache.catalina.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserAccountController {

    private final UserAccountService userAccountService;

    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    @GetMapping("/all")
    public List<UserAccount> getUsers() {
        return userAccountService.getUsers();
    }

    @GetMapping("/{id}")
    public UserAccount getUserById(@PathVariable("id") Long id) {
        return userAccountService.getUserById(id);
    }

    @GetMapping("/get")
    public UserAccount getUser(@RequestParam(name = "email") String email,
                               @RequestParam(name = "password") String password) {
        return userAccountService.getUser(email, password);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody UserAccount user) {
        userAccountService.addUser(user);
        return ResponseEntity.ok("User added");
    }

    @PutMapping("/update")
    public UserAccount updateUser(@RequestBody UserAccount user) {
        return userAccountService.updateUser(user);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteUser(@RequestParam(name = "id") Long id) {
        userAccountService.deleteUser(id);
        return ResponseEntity.ok().body("User deleted successfully");
    }
}
