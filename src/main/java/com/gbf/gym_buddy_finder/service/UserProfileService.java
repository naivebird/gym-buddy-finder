package com.gbf.gym_buddy_finder.service;

import com.gbf.gym_buddy_finder.model.UserProfile;
import com.gbf.gym_buddy_finder.repository.UserProfileRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserProfileService {
    public final UserProfileRepository userProfileRepository;

    public UserProfileService(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    public UserProfile getProfileById(Long id) {
        return userProfileRepository.findById(id).orElse(null);
    }

    public List<UserProfile> getNearbyProfiles(Long id) {
        return userProfileRepository.findNearbyProfiles(id);
    }

    public ResponseEntity<String> deleteUserProfileById(Long id) {
        userProfileRepository.deleteById(id);
        return ResponseEntity.ok("User Deleted");
    }
}
