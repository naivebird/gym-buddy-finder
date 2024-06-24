package com.gbf.gym_buddy_finder.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;


@Setter
@Entity
public class Message {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sender_id", nullable = false)
    private UserAccount senderUserAccount;

    @ManyToOne
    @JoinColumn(name = "receiver_id", nullable = false)
    private UserAccount receiverUserAccount;

    @Getter
    @Lob
    private String content;

    @Getter
    @CreationTimestamp
    private LocalDateTime timeStamp;

}
