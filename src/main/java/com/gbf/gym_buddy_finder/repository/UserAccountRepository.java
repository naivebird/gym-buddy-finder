package com.gbf.gym_buddy_finder.repository;

import com.gbf.gym_buddy_finder.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    UserAccount findByUsername(String name);
}
