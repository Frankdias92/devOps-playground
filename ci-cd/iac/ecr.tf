resource "aws_ecr_repository" "franklin-ci-api" {
  name                 = "my-github-actions-role"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    IAC = "True"
  }
}