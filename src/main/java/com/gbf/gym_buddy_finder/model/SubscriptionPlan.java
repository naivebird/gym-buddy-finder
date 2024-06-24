package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;


@Setter
@Entity
public class SubscriptionPlan {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    private String name;

    @Getter
    private Float pricePerMonth;

    @OneToMany(mappedBy = "subscriptionPlan")
    private List<Subscription> subscriptions;

    @Getter
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Getter
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
