data "aws_s3_bucket" "se_bucket" {
  bucket = "${var.org_name}-bucket-iac"
}