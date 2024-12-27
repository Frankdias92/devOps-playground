terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.82.2"
    }
  }
  backend "s3" {
    bucket = "franklin-state-bucket-tf"
    region = "us-west-2" 
    key = "terraform.tfstate"
    encrypt = true
    profile = "Franklin"
  }
}

provider "aws" {
  profile = "Franklin"
  region  = "us-west-2"
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = var.state_bucket

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_versioning" "terraform_state" {
  bucket = aws_s3_bucket.terraform_state.bucket
  versioning_configuration {
    status = "Enabled"
  }

  depends_on = [ aws_s3_bucket.terraform_state ]
}