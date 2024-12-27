output "s3_bucket_name" {
 value = module.s3.buck_domain_name 
 sensitive = false
 description = "Name of bucket S3"
}

output "cdn_domain" {
 value = module.cloudfront.cdn_domain_name 
 sensitive = false
 description = "Domain name of CloudFront"
}