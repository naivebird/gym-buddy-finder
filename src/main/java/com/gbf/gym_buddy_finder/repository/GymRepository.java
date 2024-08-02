package com.gbf.gym_buddy_finder.repository;

import com.gbf.gym_buddy_finder.model.Gym;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymRepository extends JpaRepository<Gym, Long> {
}
