resource "aws_ecr_repository" "franklin-ci-api" {
  name                 = "franklin-ci-api"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    IAC = "True"
  }
}