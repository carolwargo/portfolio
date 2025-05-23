import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Box, Typography, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import MeWhite from "../assets/images/MeWhite.png";

export default function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const sendEmail = async (data) => {
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_k9br2bn",
        "template_cbcuf3i",
        formRef.current,
        { publicKey: "istqPyzB2IlqKLona" }
      );
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Email error:", error.text);
      setStatus("error");
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        mt: { xs: 5, sm: 5, md: 5 },
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: "transparent",
        fontFamily: "Raleway, sans-serif",
        background: {
          xs: "linear-gradient(180deg, rgb(100, 3, 59) 0%, #f5e8c7 100%)",
          md: `url('/assets/hibiscus-pattern.png') center center / 200px repeat, linear-gradient(180deg, rgb(100, 3, 59) 0%, #f5e8c7 100%)`,
        },
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        backgroundSize: { xs: "cover", md: "200px, cover" },
        position: "relative",
        minHeight: { xs: "auto", md: "80vh" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(255, 255, 255, 0.2)",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "url('/assets/wave.svg') center bottom / cover no-repeat",
          zIndex: 0,
          display: { xs: "none", md: "block" },
        },
      }}
    >
      <MDBContainer style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 3, md: 3 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#FF385C",
                mb: 1,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Get in Touch
            </Typography>
            <Divider
              sx={{
                width: "120px",
                mx: "auto",
                mb: 1,
                bgcolor: "#FF385C",
                height: "3px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "white",
                px: { xs: 2, sm: 3, md: 4 },
                mb:0,
                pb:0,
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Have a question, project idea, or just want to connect? Drop me a
              message, and let’s make something happen!
            </Typography>
          </Box>
          <MDBRow className="justify-content-center align-items-end" style={{ margin: 0 }}>
      
            <MDBCol xs="12" md="6" lg="6" style={{ padding: 0 }}>
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 2, sm: 3, md: 3 },
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                     <img
  src={MeWhite}
  alt="Carol Wargo portrait"
  style={{
    width: "100%",
    maxWidth: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }}

/>
                </Box>
                     <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: { xs: 1, sm: 1 },
                      my: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      {
                        href: "mailto:carolwargo.dev@gmail.com",
                        icon: faEnvelope,
                        label: "Email Carol Wargo",
                      },
                      {
                        href: "tel:+4437711726",
                        icon: faPhone,
                        label: "Call Carol Wargo",
                      },
                      {
                        href: "https://github.com/carolwargo",
                        icon: faGithub,
                        label: "Visit Carol Wargo's GitHub profile",
                      },
                      {
                        href: "https://www.linkedin.com/in/carol-wargo-35021baa/",
                        icon: faLinkedin,
                        label: "Visit Carol Wargo's LinkedIn profile",
                      },
                    ].map((link) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        aria-label={link.label}
                        style={{ color: "#FF385C" }}
                        whileHover={{ scale: 1.2, color: "#e63252" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FontAwesomeIcon icon={link.icon} size="lg" />
                      </motion.a>
                    ))}
                  </Box>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#FF385C",
                      mb: 2,
                      textAlign: "center",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "50px",
                        height: "2px",
                        bgcolor: "#FF385C",
                      },
                    }}
                  >
                    Send a Message
                  </Typography>
                </motion.div>
                <form ref={formRef} onSubmit={handleSubmit(sendEmail)}>
                  <MDBInput
                    type="text"
                    placeholder="Name"
                    className="mb-3"
                    {...register("user_name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    error={errors.user_name?.message}
                  />
                  {errors.user_name && (
                    <Typography
                      className="text-danger mb-2"
                      sx={{ fontSize: "0.8rem" }}
                    >
                      {errors.user_name.message}
                    </Typography>
                  )}
                  <MDBInput
                    type="email"
                    placeholder="Email"
                    className="mb-3"
                    {...register("user_email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    error={errors.user_email?.message}
                  />
                  {errors.user_email && (
                    <Typography
                      className="text-danger mb-2"
                      sx={{ fontSize: "0.8rem" }}
                    >
                      {errors.user_email.message}
                    </Typography>
                  )}
                  <MDBTextArea
                    placeholder="Message"
                    rows={3}
                    className="mb-3"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    error={errors.message?.message}
                  />
                  {errors.message && (
                    <Typography
                      className="text-danger mb-2"
                      sx={{ fontSize: "0.8rem" }}
                    >
                      {errors.message.message}
                    </Typography>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MDBBtn
                      type="submit"
                      className="btn-custom-pink w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </MDBBtn>
                  </motion.div>
                  {status === "success" && (
                    <Typography
                      className="text-success mt-2 text-center"
                      sx={{ fontSize: "0.9rem" }}
                    >
                      Message sent successfully!
                    </Typography>
                  )}
                  {status === "error" && (
                    <Typography
                      className="text-danger mt-2 text-center"
                      sx={{ fontSize: "0.9rem" }}
                    >
                      Failed to send message. Please try again.
                    </Typography>
                  )}
                </form>
              </Box>
            </MDBCol>
          </MDBRow>
        </motion.div>
      </MDBContainer>
    </Box>
  );
}
           
             
               