package com.gbf.gym_buddy_finder.service;

import com.gbf.gym_buddy_finder.model.UserAccount;
import com.gbf.gym_buddy_finder.repository.UserAccountRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserAccountService {
    private final UserAccountRepository userAccountRepository;

    public UserAccountService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public List<UserAccount> getAllUserAccounts() {
        return userAccountRepository.findAll();
    }

    public UserAccount getUserAccountById(Long id) {
        return userAccountRepository.findById(id).get();
    }

    public UserAccount findByUsername(String username) {
        return userAccountRepository.findByUsername(username);
    }
}

