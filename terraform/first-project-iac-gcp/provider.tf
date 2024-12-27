terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.17.0"
    }
  }
}

provider "google" {
  project = "dev-ops-446013"
  region  = "us-central1"
  zone    = "us-central1-a"
}