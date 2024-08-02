package com.gbf.gym_buddy_finder.repository;

import com.gbf.gym_buddy_finder.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    Optional<UserAccount> findByEmail(String email);

    @Modifying
    @Query("UPDATE UserAccount u SET u.suspended = true WHERE u.id = :id")
    void suspendUserAccount(@Param("id") Long id);


}
