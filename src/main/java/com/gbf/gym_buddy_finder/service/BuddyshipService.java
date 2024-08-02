package com.gbf.gym_buddy_finder.service;


import com.gbf.gym_buddy_finder.model.Buddyship;
import com.gbf.gym_buddy_finder.model.UserProfile;
import com.gbf.gym_buddy_finder.repository.BuddyShiprepo;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class BuddyshipService {
    private final BuddyShiprepo buddyShiprepo;

//    public ResponseEntity<List<UserProfile>> findBuddiesByUserId(Long id) {
//        return ResponseEntity.ok(buddyShiprepo.findBuddiesByUserId(id));
//    }
}
