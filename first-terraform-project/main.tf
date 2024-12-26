resource "aws_s3_bucket" "s3_bucket" {
  bucket = "franklin-bucket-iac-${terraform.workspace}"

  tags = {
    Name = "First bucket"
    Iac = true
    context = "${terraform.workspace}"
  }
}