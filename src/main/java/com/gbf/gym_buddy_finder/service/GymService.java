package com.gbf.gym_buddy_finder.service;

import com.gbf.gym_buddy_finder.model.Gym;
import com.gbf.gym_buddy_finder.repository.GymRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class GymService {
    private final GymRepository gymRepository;

public ResponseEntity<List<Gym>> getAllGyms()  {
    return ResponseEntity.ok(gymRepository.findAll());
}

}
