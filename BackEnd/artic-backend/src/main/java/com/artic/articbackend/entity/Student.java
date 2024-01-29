package com.artic.articbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long studentId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "age")
    private String age;

    @Column(name = "class")
    private String studentClass;

    @Column(name = "parent_name")
    private String parentName;

    @Column(name = "parent_mobile_number")
    private String parentMobileNumber;

    @Column(name = "parent_wp_number")
    private String parentWhatsappNumber;

    @Column(name = "parrent_email")
    private String parentEmailId;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "updated_date")
    private Date updatedDate;
}
