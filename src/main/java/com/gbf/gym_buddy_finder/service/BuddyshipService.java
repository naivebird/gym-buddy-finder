package com.gbf.gym_buddy_finder.service;

import com.gbf.gym_buddy_finder.model.UserProfile;
import com.gbf.gym_buddy_finder.repository.BuddyshipRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuddyshipService {
    private final BuddyshipRepository buddyshipRepository;

    public BuddyshipService(BuddyshipRepository buddyshipRepository) {
        this.buddyshipRepository = buddyshipRepository;
    }

    public List<UserProfile> getBuddiesById(Long id) {
        return buddyshipRepository.findBuddiesById(id);
    }
}
