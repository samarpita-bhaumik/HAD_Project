package com.example.had_backend.Patient.Repository;

import com.example.had_backend.Patient.Entity.PatientL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;

public interface IPatientLoginRepository extends JpaRepository<PatientL, Serializable> {
    @Query("SELECT e FROM PatientL e where e.userName = :username AND e.password = :password")
    PatientL findByEmailAndPassword(@Param("username") String userName, @Param("password") String password);
}