package com.gbf.gym_buddy_finder.service;

import com.gbf.gym_buddy_finder.model.UserAccount;
import com.gbf.gym_buddy_finder.model.UserProfile;
import com.gbf.gym_buddy_finder.repository.UserAccountRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserAccountService {
    private final UserAccountRepository userAccountRepository;

    public UserAccountService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public List<UserAccount> getUsers() {
        return userAccountRepository.findAll();
    }

    public UserAccount getUserById(Long id) {
        return userAccountRepository.findById(id).orElse(null);
    }

    public UserAccount getUser(String email, String password) {
        Optional<UserAccount> userOptional = userAccountRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            if (!userOptional.get().getPassword().equals(password)) {
                throw new IllegalStateException("Wrong password");
            }
        }  else {
            throw new IllegalStateException("User not found");
        }
        return userOptional.get();
    }

    public void addUser(UserAccount user) {
        Optional<UserAccount> userOptional = userAccountRepository.findByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("User already exists");
        }
        userAccountRepository.save(user);
    }

    public UserAccount updateUser(UserAccount user) {
        return userAccountRepository.findById(user.getId())
                .map(u -> {
                    u.setEmail(user.getEmail());
                    u.setPassword(user.getPassword());
                    u.setRole(user.getRole());
                    return userAccountRepository.save(u);
                }).orElseThrow(() -> new IllegalStateException("User not found"));

    }

    public void deleteUser(Long id) {
        Optional<UserAccount> userOptional = userAccountRepository.findById(id);
        if (userOptional.isEmpty()) {
            throw new IllegalStateException("User not found");
        }
        userAccountRepository.deleteById(userOptional.get().getId());
    }

    @Transactional
    public String suspendUser(Long id) {
        try {
            userAccountRepository.suspendUserAccount(id);
            return "User Suspended";

        }catch (Exception e) {
            return "error suspending user : " + e.getMessage();
        }

    }


}

