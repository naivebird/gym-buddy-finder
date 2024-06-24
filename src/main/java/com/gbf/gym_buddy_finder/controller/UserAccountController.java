package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.model.UserAccount;
import com.gbf.gym_buddy_finder.service.UserAccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin("http://localhost:3000")
public class UserAccountController {
    private final UserAccountService userAccountService;

    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    @GetMapping("/user-accounts")
    public List<UserAccount> getAllUserAccounts() {
        return userAccountService.getAllUserAccounts();
    }

    @GetMapping("/user-account/id/{id}")
    public UserAccount getUserAccountById(@PathVariable("id") Long id) {
        return userAccountService.getUserAccountById(id);
    }

    @GetMapping("/user-account/username/{username}")
    public UserAccount getAccountByUsername(@PathVariable("username") String username) {
        return userAccountService.findByUsername(username);
    }
}
