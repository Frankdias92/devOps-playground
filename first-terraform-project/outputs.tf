output "bucket_domain_name" {
 value = data.aws_s3_bucket.se_bucket.bucket_domain_name 
 sensitive = false
 description = "Name domain bucket S3"
}

output "bucket_region" {
  value = data.aws_s3_bucket.se_bucket.region 
  sensitive = false
  description = "Region bucket"
}