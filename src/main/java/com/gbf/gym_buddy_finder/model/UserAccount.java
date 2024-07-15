package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

enum Role {
    ADMIN, GYM_GOER, TRAINER;
}


@Setter
@Entity
public class UserAccount {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "userAccount", cascade = CascadeType.ALL)
    private UserProfile userProfile;

    @Getter
    @Column(unique = true)
    private String email;

    @Getter
    private String password;

    @Getter
    private Role role;

    @Getter
    private LocalDateTime lastLogin;

    @Getter
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Getter
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "userAccount")
    private List<Buddyship> buddyshipUsers;

    @OneToMany(mappedBy = "buddyAccount")
    private List<Buddyship> buddyshipBuddies;

    @OneToMany(mappedBy = "senderUserAccount")
    private List<Message> messageSenders;

    @OneToMany(mappedBy = "receiverUserAccount")
    private List<Message> messageReceivers;

    @OneToMany(mappedBy = "userAccount")
    private List<UserPreference> preferences;

    @OneToMany(mappedBy = "userAccount")
    private List<Subscription> subscriptions;

    @OneToMany(mappedBy = "userAccount")
    private List<UserPhoto> userPhotos;

    @OneToMany(mappedBy = "userAccount")
    private List<Payment> payments;

    @OneToMany(mappedBy = "userAccount")
    private List<GymReview> gymReviews;

}
