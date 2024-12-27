output "buck_domain_name" {
  value = aws_s3_bucket.bucket.bucket_domain_name
  sensitive = false
  description = "Name domain bucket S3"
}

output "bucket_id" {
  value = aws_s3_bucket.bucket.id 
  sensitive = false
  description = "Id domain bucket s3"
}