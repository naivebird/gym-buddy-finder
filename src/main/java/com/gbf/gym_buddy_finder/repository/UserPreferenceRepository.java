package com.gbf.gym_buddy_finder.repository;

import com.gbf.gym_buddy_finder.dto.UserPreferenceDto;
import com.gbf.gym_buddy_finder.model.UserPreference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserPreferenceRepository extends JpaRepository<UserPreference, Long> {
    @Query(value =
            "SELECT user_id, question, answer " +
            "FROM user_preference up " +
            "JOIN question q " +
            "ON up.question_id = q.id " +
            "JOIN choice c " +
            "ON up.choice_id = c.id " +
            "WHERE user_id =:id;",
            nativeQuery = true)
    List<UserPreferenceDto> findUserPreferencesById(Long id);
}
