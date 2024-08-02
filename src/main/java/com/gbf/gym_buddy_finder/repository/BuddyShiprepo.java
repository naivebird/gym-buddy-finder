package com.gbf.gym_buddy_finder.repository;

import com.gbf.gym_buddy_finder.model.Buddyship;
import com.gbf.gym_buddy_finder.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BuddyShiprepo extends JpaRepository<Buddyship,Long> {

//    @Query("SELECT * FROM gbf.buddyship WHERE user_id = 1",nativeQuery = true)
//    List<UserProfile> findBuddiesByUserId(@Param("userId") Long userId);

}
