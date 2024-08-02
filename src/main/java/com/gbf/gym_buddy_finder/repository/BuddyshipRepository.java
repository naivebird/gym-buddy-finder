package com.gbf.gym_buddy_finder.repository;

import com.gbf.gym_buddy_finder.model.Buddyship;
import com.gbf.gym_buddy_finder.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BuddyshipRepository extends JpaRepository<UserProfile, Long> {

    @Query(value =
            "SELECT * " +
            "FROM user_profile p " +
            "WHERE p.user_account_id " +
            "IN (" +
            "    SELECT buddy_id " +
            "    FROM buddyship b " +
            "    WHERE b.user_id = :id" +
            "    );",
            nativeQuery = true)
    List<UserProfile> findBuddiesById(@Param("id") Long id);

}
