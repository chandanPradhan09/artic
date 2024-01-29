package com.artic.articbackend.validatorObj;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentRequest {
    @NotEmpty(message = "Student First Name Must Not Be EMPTY,Only Character Allowed")
    @Pattern(message = "Student First Name Must Not Be EMPTY,Only Character Allowed", regexp = "^[a-zA-Z ]*$")
    @NotBlank(message = "Student First Name Must Not Be EMPTY,Only Character Allowed")
    private String firstName;

    @NotEmpty(message = "Student Last Name Must Not Be EMPTY,Only Character Allowed")
    @Pattern(message = "Student Last Name Must Not Be EMPTY,Only Character Allowed", regexp = "^[a-zA-Z ]*$")
    @NotBlank(message = "Student Last Name Must Not Be EMPTY,Only Character Allowed")
    private String lastName;

    @NotEmpty(message = "Student Age Must Not be EMPTY Or Only Number Allowed")
    @Pattern(message = "Student Age Must Not be EMPTY Or Only Number Allowed", regexp = "[0-9]+")
    private String age;

    @NotEmpty(message = "Student Class Must Not be EMPTY Or Only [XI or XII] Allowed")
    @Pattern(message = "Student Class Must Not be EMPTY Or Only [XI or XII] Allowed", regexp = "(XI|XII)$")
    private String studentClass;

    @NotEmpty(message = "Parent Name Must Not Be EMPTY,Only Character Allowed")
    @Pattern(message = "Parent Name Must Not Be EMPTY,Only Character Allowed", regexp = "^[a-zA-Z ]*$")
    @NotBlank(message = "Parent Name Must Not Be EMPTY,Only Character Allowed")
    private String parentName;

    @NotEmpty(message = "Parent MobileNumber Must Not Be EMPTY,Should Be 10 digits")
    @Pattern(message = "Parent MobileNumber Must Not Be EMPTY,Should be 10 digits", regexp = "[0-9]{10}+")
    private String parentMobileNumber;

    @NotEmpty(message = "Parent WPMobileNumber Must Not Be EMPTY,Should Be 10 digits")
    @Pattern(message = "Parent WPMobileNumber Must Not Be EMPTY,Should be 10 digits", regexp = "[0-9]{10}+")
    private String parentWhatsappNumber;

    @NotEmpty(message = "Parent Email Must Not Be EMPTY,Should Be a valid email address")
    @Pattern(message = "Parent Email Must Not Be EMPTY,Should Be a valid email address", regexp = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
    private String parentEmailId;

}
